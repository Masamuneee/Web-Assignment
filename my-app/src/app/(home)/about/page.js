'use client'

export default function AboutUs() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6 px-4">
      <h1 className="home-section-header">ABOUT US</h1>
        <div className="max-w-[75%] mx-auto flex flex-col gap-8 mt-5 md:mt-10">
          <img src="/logo/logo-abbrvAsset 2.svg" alt="logo" className="animate-spin max-w-[60%] mx-auto mb-5 md:mb-10" />
          <p className="text-center">
            <span className="font-black">The Amazing Record Store</span> is dedicated to discovering and promoting exceptional artists, creating impactful music, and delivering highest-quality experiences to music fans. We aim to bring together a diverse community of music lovers and foster a culture of creativity, collaboration, and innovation. Our mission is to elevate the art of music and provide our artists with the tools, resources, and support they need to reach their full potential.
          </p>
          <p className="text-center">
            Our vision is to become the leading record label for innovative, boundary-pushing music that inspires and connects people. We aspire to create a powerful platform for artists to express themselves freely and connect with fans who share their passion for music. We envision a future where our record label is synonymous with quality, creativity, and authenticity, and our artists are recognized as some of the most influential and important voices in the industry. Our ultimate goal is to make a meaningful impact on the music industry and the world at large, by fostering a culture of creativity, collaboration, and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}