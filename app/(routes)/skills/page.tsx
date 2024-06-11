"use client"

import { ContainerPage } from "@/app/components/container";
import TransitionPage from "@/app/components/transition-page";
import { dataSkills } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import MotionTransition from "@/app/components/trasnsition-component";

export default function Skills  ()  {
    return(
      <ContainerPage>
        <TransitionPage/>
        <MotionTransition position="bottom" className="flex flex-col justify-center h-lhv">
            <h1 className="text-2xl leading text-center  md:text-4xl md:mb-5">
              Habilidades 
                
                <span className="block font-bold text-violet">
                  blandas
                </span>
            </h1>
            <div className="flex items-center justify-center">
              <div>
                <Swiper
                breakpoints={{
                    320:{
                      slidesPerView: 1,
                      spaceBetween: 15
                    }
                  }}
                  freeMode={true}
                  pagination={{
                    clickable: true
                  }}
                  modules={[Pagination]}
                  className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                >
                {dataSkills.map(({id, name,imageUrl }) => (
                  <SwiperSlide key={id}>
                    <Image src={imageUrl} alt={name} width={250} height={250} className="mx-auto rounded-full" />
                    <h1 className="text-center">{name}

                    </h1>
                  </SwiperSlide>
                ))} 
                </Swiper>
              </div>
            </div>
        </MotionTransition>
      </ContainerPage>  
    );
}
