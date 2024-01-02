import Image from "next/image";
import logo from "../public/footer-logo.svg";
import facebook from "../public/icon-facebook.svg";
import instagram from "../public/icon-instagram.svg";
import twitter from "../public/icon-twitter.svg";
import pinterest from "../public/icon-pinterest.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 ">
          {/* Logo */}
          <div>
            <Image src={logo} alt="footer logo" width={120} height={50} />
          </div>

          {/* Footer Links 1 */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-wide hover:text-accent">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-5 hover:text-accent">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Analytics
                </button>
              </li>
            </ul>
          </div>
          {/* Footer Links 2 */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-wide  hover:text-accent">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-5 hover:text-accent">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Support
                </button>
              </li>
            </ul>
          </div>
          {/* Footer Links 3 */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-wide  hover:text-accent">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-5 hover:text-accent">
                  About
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Career
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-2 hover:text-accent">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <Image src={facebook} alt="" />
              </li>
              <li>
                <Image src={twitter} alt="" />
              </li>
              <li>
                <Image src={instagram} alt="" />
              </li>
              <li>
                <Image src={pinterest} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
