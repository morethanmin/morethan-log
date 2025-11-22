import { CONFIG } from "site.config"
import Tag from "src/components/Tag"
import { TPost } from "src/types"
import { formatDate } from "src/libs/utils"
import Image from "next/image"
import React, { useState, useEffect, KeyboardEvent, MouseEvent } from "react"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const altText = data.title || "Image preview"

  const handleOpenPreview = () => {
    if (!data.thumbnail) return
    setIsPreviewOpen(true)
  }

  const handleClosePreview = () => {
    setIsPreviewOpen(false)
  }

  const handleThumbnailKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleOpenPreview()
    }
  }

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    handleClosePreview()
  }

  useEffect(() => {
    if (!isPreviewOpen) return

    const handleKeyDown = (e: KeyboardEvent | any) => {
      if (e.key === "Escape") {
        setIsPreviewOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isPreviewOpen])

  return (
    <StyledWrapper>
      <h1 className="title">{data.title}</h1>
      <StyledHr />

      {data.type[0] !== "Paper" && (
        <nav>
          <div className="top">
            {data.author && data.author[0] && data.author[0].name && (
              <div className="author">
                <Image
                  css={{ borderRadius: "50%" }}
                  src={data.author[0].profile_photo || CONFIG.profile.image}
                  alt="profile_photo"
                  width={24}
                  height={24}
                />
                <div>
                  <div>{data.author[0].name}</div>
                  <div className="date">
                    {formatDate(
                      data?.date?.start_date || data.createdTime,
                      CONFIG.lang
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mid">
            {data.tags && (
              <div className="tags">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}

      <StyledHr />

      {data.thumbnail && (
        <>
          <StyledThumbnail
            onClick={handleOpenPreview}
            onKeyDown={handleThumbnailKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Preview thumbnail"
          >
            <Image
              src={data.thumbnail}
              css={{ objectFit: "cover" }}
              fill
              alt={altText}
            />
          </StyledThumbnail>

          {isPreviewOpen && (
            <ModalOverlay onClick={handleOverlayClick}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton
                  type="button"
                  onClick={handleClosePreview}
                  aria-label="Close image preview"
                >
                  ×
                </CloseButton>
                <ModalImageWrapper>
                  <ModalImage src={data.thumbnail} alt={altText} />
                </ModalImageWrapper>
                <ModalCaption>{altText}</ModalCaption>
              </ModalContent>
            </ModalOverlay>
          )}
        </>
      )}
    </StyledWrapper>
  )
}

export default PostHeader

const StyledWrapper = styled.div`
  .title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray11};
    justify-content: space-between;
    align-items: flex-start;

    > .top {
      display: flex;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
      align-items: center;

      .author {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: smaller;
        justify-items: left;
      }

      .date {
        margin-right: 0.5rem;
        font-size: x-small;
      }
    }

    > .mid {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;

      .tags {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        gap: 0.5rem;
        max-width: 100%;
      }
    }
  }
`

const StyledHr = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray10};
`

const StyledThumbnail = styled.div`
  overflow: hidden;
  position: relative;
  margin: 1.75rem 0;
  border-radius: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray4};
  padding-bottom: 66%;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding-bottom: 50%;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gray10};
    outline-offset: 2px;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray1 || "#fff"};
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  display: inline-flex;
  flex-direction: column;
  align-items: stretch;

  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) !important;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.7rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray12 || "#000"};
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`

const ModalImageWrapper = styled.div`
  margin-top: 0.75rem;
  border-radius: 0.75rem;
  overflow: hidden;

  /* batasin ukuran wrapper supaya nggak lebih besar dari modal */
  max-width: 100%;
  max-height: calc(90vh - 3rem);
`

const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: auto;

  /* jaga-jaga kalau gambar portrait tinggi banget */
  max-height: calc(90vh - 3rem);
`
const ModalCaption = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray11 || "#ccc"};
  word-break: break-word;
`
