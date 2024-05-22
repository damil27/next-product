"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryPublic {
  public_id: string;
}
const UploadImage = () => {
  const [publicId, setPublicId] = useState(
    "https://res.cloudinary.com/dny5n3phy/image/upload/v1716373545/pw5pezlnc9nui5vlq3xg.jpg"
  );

  return (
    <div className="mt-8">
      {publicId && (
        <CldImage
          src={publicId}
          width={210}
          height={110}
          alt="personal image"
        />
      )}

      <CldUploadWidget
        uploadPreset="kefpfbdp"
        options={{
          sources: ["local", "camera", "google_drive"],
          multiple: false,
          maxFiles: 2,
          styles: {
            palette: {
              window: "#FFFFFF",
              windowBorder: "#90A0B3",
              tabIcon: "#0078FF",
              menuIcons: "#5A616A",
              textDark: "#000000",
              textLight: "#FFFFFF",
              link: "#0078FF",
              action: "#FF620C",
              inactiveTabIcon: "#0C60CE",
              error: "#E52011",
              inProgress: "#0078FF",
              complete: "#20B832",
              sourceBg: "#E4EBF1",
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryPublic;
          setPublicId(info.public_id);
          console.log(result);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              upload
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImage;
