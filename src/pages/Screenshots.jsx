import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navbar, SectionHeading, screenshots } from "../shared";

export default function ScreenshotsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath = "/screenshots";

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <Navbar currentPath={currentPath} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <section id="screenshots" className="py-24 overflow-hidden">
        <div className="px-6 mb-16">
          <SectionHeading
            badge="Gallery"
            subtitle="Beautiful modern UI crafted for speed and simplicity."
          >
            Experience Sanchay
          </SectionHeading>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-14"
        >
          {screenshots.map((shot, i) => (
            <SwiperSlide key={i} className="!w-[240px] md:!w-[290px]">
              <motion.div
                className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-2 rounded-[28px] hover:border-violet-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <img
                  src={shot}
                  alt="app screenshot"
                  className="rounded-[22px]"
                  loading="lazy"
                  decoding="async"
                  width="420"
                  height="930"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
