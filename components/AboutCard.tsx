/* eslint-disable @next/next/no-img-element */
export const AboutCard = ({ children = null }: { children: React.ReactNode }) => (
  <div className="flex justify-center items-center" style={{ minHeight: '80vh' }}>
    {/* <div className="bg-white p-8 rounded shadow-lg">asdas</div> */}
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <img src="/images/face-left.png" alt="Image" style={{ height: 250 }} />
      </div>
      <h1 className="font-normal text-gray-900 text-4xl md:text-6xl leading-none mb-6">
        Igor Suvorov
      </h1>
      <h6 className="font-medium text-gray-600 text-lg md:text-2xl  mb-6">
        Entrepreneur / Programmer
      </h6>
      <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
        I have a passion for software. I enjoy creating tools that make life easier for people.
      </p>
      {children}
    </div>
  </div>
);
