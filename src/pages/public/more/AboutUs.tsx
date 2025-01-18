import notification from '@/utils/notification';
import { Carousel } from '@mantine/carousel';
import { useEffect } from 'react';

const AboutUs = () => {
  // MARK:- Lifecycle

  useEffect(() => {
    notification('Hello World', 'error');
  }, []);

  // MARK:- Network Request
  // MARK:- Functions
  // MARK:- Components
  // MARK:- Render
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-primary rounded-[48px] shadow-md p-6 w-full max-w-[1300px] md:h-[450px] lg:h-[450px] flex flex-col md:flex-row md:items-center md:gap-12 gap-6 lg:p-10 text-center md:text-start">
          {/* Text Section */}
          <div className="mb-6 md:w-1/2 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight lg:text-[34px]">
              We're making lives better each day through our work.
            </h1>
            <p className="mt-4 text-lg text-gray-600 lg:mt-7">
              We mainly focus on Creating a Positive Impact on Humanity Through
              Innovations.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-[48px] overflow-hidden lg:ml-[80px]">
              <img
                src="/public/new one.svg"
                alt="Team Collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12 mt-[100px]">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative aspect-square">
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
                <div className="absolute inset-0">
                  <div className="relative">
                    <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
                      <img
                        src="/public/Ellipse 21.svg"
                        alt="Team Collaboration"
                        className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                      />

                      <div className="absolute inset-0 flex items-center justify-center ">
                        <img
                          src="/public/1_-removebg-preview.png"
                          alt="Team Collaboration"
                          className="object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2">
                    <img
                      src="/public/Ellipse 21.svg"
                      alt="Team Collaboration"
                      className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                    />
                    <div className="absolute inset-0 flex items-center justify-center ">
                      <img
                        src="/public/remove 2 s.png"
                        alt="Team Collaboration"
                        className="object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2">
                    <img
                      src="/public/Ellipse 21.svg"
                      alt="Team Collaboration"
                      className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                    />
                    <div className="absolute inset-0 flex items-center justify-center ">
                      <img
                        src="/public/remove 3 s.png"
                        alt="Team Collaboration"
                        className="object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                      />
                    </div>
                  </div>

                  <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <img
                      src="/public/Ellipse 21.svg"
                      alt="Team Collaboration"
                      className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                    />
                    <div className="absolute inset-0 flex items-center justify-center ">
                      <img
                        src="/public/remove 4 s.png"
                        alt="Team Collaboration"
                        className="object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Content --> */}
            <div className="p-4 space-y-6 sm:p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                What Makes Us Unique?
              </h2>
              <div className="space-y-4 text-base text-gray-600 sm:text-lg md:text-xl">
                <p>
                  At Vertex Cooperation Pvt. Ltd., our focus is on identifying
                  real-world challenges that affect people&apos;s lives and
                  addressing them through technology-driven innovations. With a
                  dedicated and highly skilled
                </p>
                <p>
                  research and development team, we bring innovative solutions
                  to life, making a meaningful difference for society.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-second p-6 sm:p-8 md:p-12 rounded-3xl md:w-[1090px] md:h-[607px] mt-[120px]">
          <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x-4 h-auto md:h-[416px] divide-white mt-9">
            {/* <!-- Vision Section --> */}
            <div className="flex flex-col items-center text-center space-y-4 pb-8 md:pb-0 lg:mt-[63px]">
              <div className="flex items-center justify-center p-4 bg-white rounded-full">
                <img
                  src="/public/computer-vision.svg"
                  alt="Vision"
                  className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                />
              </div>
              <h2 className="text-white text-3xl sm:text-4xl md:text-[48px] font-bold">
                Vision
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-[30px] max-w-sm lg:text-[30px] lg:leading-[45px]">
                Enhancing lifestyles for a better future
              </p>
            </div>

            {/* <!-- Mission Section --> */}
            <div className="flex flex-col items-center text-center space-y-4 pt-8 md:pt-0 md:pl-8 lg:mt-[63px]">
              <div className="flex items-center justify-center p-4 bg-white rounded-full">
                <img
                  src="/public/targeting.svg"
                  alt="Mission"
                  className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                />
              </div>
              <h2 className="text-white text-3xl sm:text-4xl md:text-[48px] font-bold">
                Mission
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-[30px] max-w-sm lg:text-[30px] lg:leading-[45px]">
                Creating a Positive Impact on Humanity Through Innovation
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Cart Section --> */}
        <section className="bg-background w-full mt-[88px] md:min-h-[846px]">
          <h2 className="text-3xl md:text-[48px] font-bold mt-[111px] ml-[20px] sm:ml-[60px] md:ml-[120px] text-center md:text-left">
            Meet Our Core Team
          </h2>
          {/* <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full mt-[61px] px-[20px] sm:px-[60px] md:px-[108px]"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="card bg-white shadow-md p-6 mx-auto w-full max-w-[342px] h-[443px] rounded-[32px]">
                <div className="flex justify-center mb-4">
                  <img
                    src={'/public/Rectangle 1.svg'} // Fallback image if member.image is not provided
                    alt={member.name}
                    className="w-[150px] h-[150px] rounded-full border-4 border-blue-500 mt-[56px]"
                  />
                </div>

                <h3 className="text-lg md:text-[18px] font-semibold text-center mt-[82px]">
                  {member.name}
                </h3>
                <p className="text-blue-500 text-center mt-[17px]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

          <Carousel
            withIndicators
            height={200}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
          >
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
