import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import {
  HiMail,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
  HiExclamationCircle,
  HiDuplicate,
  HiCheck,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SERVICE_ID = "service_kh2du3s";
const TEMPLATE_ID = "template_p39kyk7";
const PUBLIC_KEY = "h4zK-vxE_33m6otcY";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const emailAddress = "mokhtarismail619431@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full pb-28 pt-20 px-4 sm:px-8 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Let's build something <span className="text-blue-600 dark:text-blue-400">great.</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Have an idea, a project, or just want to connect? Send a message and let's bring it to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left Side: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {/* Email Card with Copy Function */}
            <div className="group relative p-6 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <HiMail size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      Direct Email
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email"
                  className="p-2 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  {copied ? (
                    <HiCheck size={18} className="text-emerald-500" />
                  ) : (
                    <HiDuplicate size={18} />
                  )}
                </button>
              </div>

              {/* Copy Notification Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-6 bottom-2 text-[10px] font-semibold text-emerald-500"
                  >
                    Copied to clipboard!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <HiLocationMarker size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Egypt · <span className="text-blue-600 dark:text-blue-400 font-semibold">Remote Available</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-6 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl shadow-sm">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Social Profiles
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/mokhtarismai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-medium text-sm transition-all duration-300 shadow-sm"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mokhtarismail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-medium text-sm transition-all duration-300 shadow-sm"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-3 p-7 sm:p-9 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl shadow-gray-200/20 dark:shadow-none"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/80 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/80 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hi Mokhtar, I'd like to discuss a project..."
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/80 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {status === "sending" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending message...</span>
                  </div>
                ) : (
                  <>
                    <HiPaperAirplane size={18} className="rotate-90" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Alert Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-3"
                  >
                    <HiCheckCircle size={20} className="shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-3"
                  >
                    <HiExclamationCircle size={20} className="shrink-0" />
                    <span>Oops! Failed to send. Please check your connection and try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;