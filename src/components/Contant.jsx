import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b Oborder-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">57 queen ST N</p>
        <p className="my-4">2269783789</p>
        <a href="#" className="border-b">
          jmehta199731@gmail.com
        </a>
      </div>
    </div>
  );
};
export default Contact;
