import React from "react";
import { Carousel, Button } from "antd";
import Image from "next/image";

const AppBanner = () => {
    return (
        <Carousel arrows infinite={false} dotPosition="bottom">
            <div className="relative">
                <Image
                    src="/images/banner.png"
                    alt="Banner 1"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
                    <h2 className="text-white text-xl font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Ab delectus, sunt eum veniam quae tempore. <br />
                        Eum quam voluptate numquam maxime incidunt sunt? <br />
                        Voluptate obcaecati maxime alias, et eos omnis recusandae.
                    </h2>
                    <Button type="primary" className="mt-4 w-40">Learn More</Button>
                </div>
            </div>

            <div className="relative">
                <Image
                    src="/images/banner.png"
                    alt="Banner 2"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
                    <h2 className="text-white text-xl font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Ab delectus, sunt eum veniam quae tempore. <br />
                        Eum quam voluptate numquam maxime incidunt sunt? <br />
                        Voluptate obcaecati maxime alias, et eos omnis recusandae.
                    </h2>
                    <Button type="primary" className="mt-4 w-40">Learn More</Button>
                </div>
            </div>

            <div className="relative">
                <Image
                    src="/images/banner.png"
                    alt="Banner 3"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
                    <h2 className="text-white text-xl font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Ab delectus, sunt eum veniam quae tempore. <br />
                        Eum quam voluptate numquam maxime incidunt sunt? <br />
                        Voluptate obcaecati maxime alias, et eos omnis recusandae.
                    </h2>
                    <Button type="primary" className="mt-4 w-40">Learn More</Button>
                </div>
            </div>

            <div className="relative">
                <Image
                    src="/images/banner.png"
                    alt="Banner 4"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-y-0 left-10 flex flex-col justify-center">
                    <h2 className="text-white text-xl font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Ab delectus, sunt eum veniam quae tempore. <br />
                        Eum quam voluptate numquam maxime incidunt sunt? <br />
                        Voluptate obcaecati maxime alias, et eos omnis recusandae.
                    </h2>
                    <Button type="primary" className="mt-4 w-40">Learn More</Button>
                </div>
            </div>
        </Carousel>
    );
};

export default AppBanner;
