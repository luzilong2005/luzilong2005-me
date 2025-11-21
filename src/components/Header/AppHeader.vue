<template>
  <header
    class="fixed top-0 left-0 z-50 h-(--header-height) w-screen bg-white/1 px-6
      backdrop-blur-md transition-all duration-300"
  >
    <nav class="flex h-full items-center justify-between">
      <div class="flex items-center justify-start space-x-4">
        <AvatarBox class="size-12" />
        <SignatureBox />
      </div>
      <div class="flex items-center space-x-2 sm:space-x-4">
        <HeaderNavBox title="该项目的Github仓库地址" :link="PROJECT_GITHUB_URL">
          本项目
        </HeaderNavBox>
        <HeaderNavBox>
          <ParticlesToggler />
        </HeaderNavBox>
        <HeaderNavBox title="首页" route="/">
          <HomeIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox title="Github 主页" :link="GITHUB_HOME_URL">
          <GithubIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox title="二维码" @click="handleOpenQrCodeModal">
          <QrCodeIcon :size="20" class="cursor-pointer" />
        </HeaderNavBox>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { GithubIcon, HomeIcon, QrCodeIcon } from "lucide-vue-next";
import HeaderNavBox from "./HeaderNavBox.vue";
import { GITHUB_HOME_URL, PROJECT_GITHUB_URL, WEB_SITE_URL } from "@/constants";
import swal from "sweetalert2";
import { renderSVG } from "uqr";
import { Canvg } from "canvg";
import ParticlesToggler from "./ParticlesToggler.vue";
import AvatarBox from "../AvatarBox.vue";
import SignatureBox from "./SignatureBox.vue";

const generateQRCode = async (url: string): Promise<{ dataUrl: string; downloadUrl: string }> => {
  const qrCode = renderSVG(url);
  const canvas = document.createElement("canvas");
  const size = 128;
  
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = size * pixelRatio;
  canvas.height = size * pixelRatio;
  
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("无法获取画布上下文");
  
  ctx.imageSmoothingEnabled = false;
  const v = await Canvg.from(ctx, qrCode);
  await v.render();
  
  const dataUrl = canvas.toDataURL("image/png");
  const blob = await (await fetch(dataUrl)).blob();
  const downloadUrl = URL.createObjectURL(blob);
  
  return { dataUrl, downloadUrl };
};

const handleOpenQrCodeModal = async () => {
  try {
    const { dataUrl, downloadUrl } = await generateQRCode(WEB_SITE_URL);
    const size = 128;
    
    swal.fire({
      theme: "dark",
      title: "扫描二维码访问网站",
      imageUrl: dataUrl,
      imageWidth: size,
      imageHeight: size,
      html: `<a href="${downloadUrl}" download="qrCode.png" class="text-blue-400 hover:text-blue-300">下载 PNG</a>`,
      showCloseButton: true,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error("生成二维码失败:", error);
    swal.fire({
      icon: "error",
      title: "生成二维码失败",
      text: "请稍后再试",
    });
  }
};
</script>
