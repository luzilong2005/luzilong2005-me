<template>
  <header
    class="fixed top-0 left-0 h-(--header-height) w-screen bg-white/1 px-6
      backdrop-blur-md"
  >
    <nav class="flex h-full items-center justify-between">
      <div class="flex items-center">
        <LogoBox />
      </div>
      <div class="flex items-center">
        <HeaderNavBox :link="PROJECT_GITHUB_URL"> 项目 </HeaderNavBox>
        <HeaderNavBox route="/">
          <HomeIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox :link="GITHUB_HOME_URL">
          <GithubIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox @click="handleOpenQrCodeModal">
          <QrCodeIcon :size="20" />
        </HeaderNavBox>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { GithubIcon, HomeIcon, QrCodeIcon } from "lucide-vue-next";
import HeaderNavBox from "./HeaderNavBox.vue";
import LogoBox from "./LogoBox.vue";
import { GITHUB_HOME_URL, PROJECT_GITHUB_URL, WEB_SITE_URL } from "@/constants";
import swal from "sweetalert2";
import { renderSVG } from "uqr";
import { Canvg } from "canvg";
const handleOpenQrCodeModal = async () => {
  const qrCode = renderSVG(WEB_SITE_URL);
  const canvas = document.createElement("canvas");
  const w = 128;
  const h = 128;
  canvas.width = w * window.devicePixelRatio;
  canvas.height = h * window.devicePixelRatio;
  const ctx = canvas.getContext("2d");
  ctx!.imageSmoothingEnabled = false;
  const v = await Canvg.from(ctx!, qrCode);
  await v.render();
  const pngDataUrl = canvas.toDataURL("image/png");
  const pngUrl = URL.createObjectURL(
    new Blob([pngDataUrl], { type: "image/png" }),
  );

  swal.fire({
    theme: "dark",
    title: "扫描二维码访问网站",
    imageUrl: pngDataUrl,
    imageWidth: w,
    imageHeight: h,
    html: `<a href="${pngUrl}" download="qrCode.png">下载 PNG</a>`,
  });
};
</script>
