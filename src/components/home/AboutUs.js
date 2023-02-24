import { Link } from 'react-router-dom';
import Nav from './Nav';

const AboutUs = () => {
  return (
    <>
      <Nav />
      <div className="mt-10">
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Us
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in ligula vel velit pulvinar malesuada. Nullam blandit
                  orci ac sapien venenatis, sit amet bibendum dui ultrices.
                  Phasellus nec ultrices sapien. Praesent id hendrerit purus,
                  eget luctus libero. Donec eget odio ac enim euismod elementum.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <div className="h-64 rounded-lg overflow-hidden ">
                      <img
                        src="/images/owner2.jpg"
                        alt="About Us"
                        className="h-64 rounded-full  "
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Hernanie B. Clacio
                      </h3>
                      <p className="mt-1 text-md text-gray-500">Owner</p>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in ligula vel velit pulvinar malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img
                        src="/images/owner1.jpg"
                        alt="About Us"
                        className="h-64 rounded-full "
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Lilia T. Clacio
                      </h3>
                      <p className="mt-1 text-md text-gray-500">Owner</p>
                      <p className="mt-2 text-sm text-gray-500">
                        Nullam blandit orci ac sapien venenatis, sit amet
                        bibendum dui ultrices. Phasellus nec ultrices sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div
            className="h-64 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/lnc-cover.jpg')" }}>
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
              <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
                Visit Now!
              </h1>
            </div>
          </div>
          <div className="py-16 px-8 md:px-16">
            <h2 className="text-3xl font-bold mb-4">Our Store</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              euismod mauris eget nisi consectetur, sed ultricies arcu faucibus.
              Duis efficitur justo lectus, vel tincidunt velit lacinia ut. Sed
              euismod metus et nulla rutrum, sed faucibus felis scelerisque.
            </p>
            <p className="text-lg mb-8">
              Our store is located in the heart of downtown and features a wide
              selection of products for all your needs. Our friendly staff is
              always available to answer any questions and help you find exactly
              what you're looking for.
            </p>
            <p className="text-lg">
              We pride ourselves on providing the best possible shopping
              experience for our customers. From our top-quality products to our
              exceptional customer service, we're here to make sure you're
              completely satisfied with your purchase.
            </p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        <div className="bg-gray-100 border-t-4 border-gray-900 p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">We are Located in:</h2>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="location"
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=lnc hollow&t=&z=14&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
              />
              <Link href="https://2yu.co"></Link>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.mapouter{position:relative;text-align:right;height:100%;width:100%;}',
                }}
              />
              <Link href="https://embedgooglemap.2yu.co/"></Link>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
