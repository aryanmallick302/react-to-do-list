import linkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";

function ContactUs() {
  return (
    <>
      <div className="flex items-center justify-center py-16 px-8">
        {/* Inner panel — the cassette label from the sketch */}
        <div className="rounded-2xl border-2 border-[#023047] bg-[#ffb703]/10 px-8 py-6 min-w-80 flex flex-col items-center gap-5 shadow-lg">
          {/* Name + Email block */}
          <div
            className="w-full rounded-xl border-2 border-[#023047] px-6 py-3 text-center"
            style={{ background: "#fff" }}
          >
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{
                color: "#023047",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                letterSpacing: "0.02em",
              }}
            >
              Aryan Mallick
            </h1>
            <p
              className="text-sm mt-1"
              style={{
                color: "#023047",
                fontFamily: "'Courier New', monospace",
                opacity: 0.75,
              }}
            >
              aryanmallick.office@gmail.com
            </p>
          </div>

          {/* Social icon buttons */}
          <div
            className="w-full rounded-xl border-2 border-[#023047] px-4 py-3 flex items-center justify-center gap-5"
            style={{ background: "rgba(255,183,3,0.12)" }}
          >
            {/* LinkedIn */}
            <a
              href="www.linkedin.com/in/aryan-mallick"
              target="_blank"
              rel="noopener noreferrer"
              id="linkedIn"
              className="w-12 h-12 rounded-xl border-2 border-[#023047] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
              style={{ background: "#fff" }}
            >
              <img
                src={linkedIn}
                alt="LinkedIn"
                className="w-6 h-6 object-contain"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aryan_mallick209/"
              target="_blank"
              rel="noopener noreferrer"
              id="instagram"
              className="w-12 h-12 rounded-xl border-2 border-[#023047] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
              style={{ background: "#fff" }}
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="w-6 h-6 object-contain"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              id="github"
              className="w-12 h-12 rounded-xl border-2 border-[#023047] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
              style={{ background: "#fff" }}
            >
              <img
                src={GitHub}
                alt="GitHub"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
