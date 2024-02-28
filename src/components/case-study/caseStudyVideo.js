import React from "react"

const CaseStudyVideo = ({ videoURL, ariaLabel }) => {
  const toggleVideoKeyboard = e => {
    const target = e.currentTarget

    if (target.key === " " || target.key === "Enter") {
      target.preventDefault(target)
      toggleVideo(target)
    }
  }

  // Event handler for playing and pausing the looping video
  const toggleVideo = e => {
    const target = e.currentTarget

    if (target.nextElementSibling.paused) {
      target.classList.remove("paused")
      target.nextElementSibling.play()
      target.setAttribute("aria-pressed", "false")
    } else {
      target.classList.add("paused")
      target.nextElementSibling.pause()
      target.setAttribute("aria-pressed", "true")
    }
  }

  return (
    <div class="c-video-container c-case-study__section">
      <button
        class="c-video-controls"
        onClick={toggleVideo}
        onKeyDown={toggleVideoKeyboard}
        aria-pressed="false"
        aria-label="Pause video"
      >
        <svg
          class="pause-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 2.66675H4V13.3334H6.66667V2.66675Z"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 2.66675H9.33331V13.3334H12V2.66675Z"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          class="play-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33333 2L12.6667 8L3.33333 14V2Z"
            stroke="currentColor"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <video
        class="c-video"
        autoPlay
        playsInline
        loop
        muted
        disablePictureInPicture
        background
        aria-label={ariaLabel}
      >
        <source preload="none" src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        class="c-video reduced-motion"
        aria-label={ariaLabel}
        controls
        playsInline
        loop
        muted
        disablePictureInPicture
        background
      >
        <source preload="none" src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default CaseStudyVideo
