export default function Contact() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="home-section-header">CONTACT US</h1>
        <div className="mt-14 flex flex-col gap-14">
          <div className="grid grid-cols-[3fr_2fr] bg-gray-100 rounded-2xl overflow-hidden">
            <div className="bg-[url('https://recordhead.biz/wp-content/uploads/2021/05/1509134514.jpg')] bg-cover bg-center">
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="mt-4 flex flex-col gap-1">
                <p>
                  <span className="font-bold">Address:</span> 268 Ly Thuong Kiet Street, Ward 14, District 10, HCMC
                </p>
                <p>
                  <span className="font-bold">Phone:</span> (215) 3579-2261-3384-3976
                </p>
                <p>
                  <span className="font-bold">Email:</span>
                  <a href="mailto:contact@amazingrecord.store"> contact@amazingrecord.store</a>
                </p>
                <p>
                  <span className="font-bold">Opening hours:</span> 09:00 - 21:00, Monday - Sunday
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Store Leadership</h2>
            <div className="grid grid-cols-3 mt-4">
              <div>
                <h1 className="text-xl font-bold">Pham Quang Minh</h1>
                <p>CEO</p>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-xl font-bold">Duong Dong Quan</h1>
                  <p>Senior Vice President<br/>Operations</p>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Tran Huu Vinh</h1>
                  <p>Senior Vice President<br/>Retail</p>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold">Nguyen Ngo Huy</h1>
                <p>Store Fellow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}