import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-4 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <img src="/images/Swiggy logo.png" alt="Swiggy Logo" className="w-16 h-auto mr-2" />
            <span className="text-2xl font-bold text-orange-500">Swiggy</span>
          </div>
          <span className="text-gray-500 text-sm">© 2025 Swiggy Limited</span>
        </div>
        {/* Columns */}
        <div className="flex flex-wrap gap-12 flex-1 justify-between">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact us</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-2">Legal</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Available in:</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <select className="mt-2 border rounded px-2 py-1 text-sm">
              <option>685 cities</option>
            </select>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Life at Swiggy</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-2">Social Links</h3>
            <div className="flex gap-3 text-gray-600 text-xl">
              <a href="#" aria-label="LinkedIn"><img src="Public/images/linkedin.png" alt="" className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram"><img src="Public/images/instagram.png" alt="" className="w-3 h-3 mt-0.5" /></a>
              <a href="#" aria-label="Facebook"><img src="Public/images/facebook.png" alt="" className="w-3 h-3 mt-0.5" /></a>
              <a href="#" aria-label="Pinterest"><img src="Public/images/pinterest.png" alt="" className="w-3 h-3 mt-0.5" /></a>
              <a href="#" aria-label="Twitter"><img src="Public/images/twitter.png" alt="" className="w-3 h-3 mt-0.5 " /></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-[27px] text-lg text-gray-700 text-center md:text-left">For better experience, download the Swiggy app now</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#"><img src="/images/applestore.png" alt="Download on the App Store" className="h-[60px] mt-1" /></a>
          <a href="#"><img src="/images/googleplay.png" alt="Get it on Google Play" className="h-[70px]" /></a>
        </div>
      </div>
    </footer>
  );
}
