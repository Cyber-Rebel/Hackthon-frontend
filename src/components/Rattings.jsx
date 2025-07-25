import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Rashimi Sheoran',
    title: '957k Account Impressions',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fuga alias earum, consequatur quia doloremque quidem obcaecati ut quos fugiat ullam suscipit consequuntur deleniti.',
    image: 'https://framerusercontent.com/images/UrltwL90XniK4NccjQKFWdkveqA.png?scale-down-to=512',
    reactions: ['🔥', '❤️', '🚀', '🙌'],
  },
  {
    name: 'Yash Verma',
    title: '1.1M Views Reached',
    text: 'Sapiente sequi minus vero, repellendus officiis maxime? Quibusdam itaque laborum praesentium possimus cumque, facilis nulla quisquam repellat ab esse magnam!',
    image: 'https://framerusercontent.com/images/UrltwL90XniK4NccjQKFWdkveqA.png?scale-down-to=512',
    reactions: ['💯', '🌟', '🔥', '👏'],
  },
  {
    name: 'Tanvi Rana',
    title: '400K+ Followers Impacted',
    text: 'Eligendi accusamus voluptas quos? Nihil quisquam alias suscipit facere in iure nesciunt tempora cum est. Voluptatem minima assumenda atque aliquid.',
    image: 'https://framerusercontent.com/images/UrltwL90XniK4NccjQKFWdkveqA.png?scale-down-to=512',
    reactions: ['🌈', '✨', '❤️', '🙌'],
  },
];

const Rattings = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Voices of <span className="text-teal-400">456K+</span> Learners Across 12 Transformational Courses
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-teal-400 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{testimonial.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{testimonial.text}</p>
              <span className="text-teal-400 font-bold mb-4">~ {testimonial.name}</span>

              {/* Emoji Reactions */}
              <div className="flex gap-3 text-xl">
                {testimonial.reactions.map((emoji, i) => (
                  <span
                    key={i}
                    className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                    title="React"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rattings;
      