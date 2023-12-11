'use client'

//import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import type SwiperType from 'swiper'
import { Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

const urls = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
]

const Carousel = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  })

  useEffect(() => {
    swiper?.on('slideChange', ({ activeIndex }) => {
      setActiveIndex(activeIndex)
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      })
    })
    //}, [swiper, urls])
  }, [swiper])

  const activeStyles =
    'active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300'
  const inactiveStyles = 'hidden text-gray-400'

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView={1}
      className="h-full w-full md:w-2/4"
    >
      {urls.map((url, i) => (
        <SwiperSlide key={i} className="relative -z-10 h-full w-full">
          <Card className="py-4">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
              <small className="text-default-500">ID: {url.id}</small>
              <h4 className="text-large font-bold">Name: {url.name}</h4>
            </CardHeader>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
