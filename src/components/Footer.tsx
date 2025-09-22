export default function Footer() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Thar Tribe Hostel</h3>
          <p className="text-sm">
            Your cozy stay away from home, safe, clean and affordable
          </p>
          <p>For Booking Contact</p>
          <p>-0141 2287565</p>
          <p>Customer Support</p>
          <p>thartriblehostel.support.co.in</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Hostels</li>
            <li>Offers</li>
            <li>Accommodation</li>
            <li>Gallery</li>
            <li>Packages</li>
            <li>Attractions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect with us</h4>
          <div className="flex gap-3">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h5>get touch with us</h5>
          <div>
            <form action="" id="newsletter">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mt-10 text-sm text-gray-300">
        © 2025 Thar Tribe Hostel. All rights reserved.
      </div>
    </>
  );
}
