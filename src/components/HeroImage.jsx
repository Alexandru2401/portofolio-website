import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpeg";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        backgroundImage: "linear-gradient(45deg, #fff, #fefefefe, 100%)",
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        backgroundImage: [
          "linear-gradient(45deg, #fff, #fefefefe, 100%)",
          "linear-gradient(45deg, red, blue, 90%)",
          "linear-gradient(45deg, #fff, #fefefefe, 100%)",
        ],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        width: "300px",
        height: "300px",
        border: "5px solid red",
        float: "left",
      }}
      className="img-container"
    >
      <img
        src={avatar}
        alt="avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
    </motion.div>
  );
}
