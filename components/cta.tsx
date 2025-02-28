import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Em breve!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo.svg"
        alt="logo da MedLabz"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0 },
            visible: { filter: "blur(0px)", opacity: 1 },
          }}
          className="text-center text-3xl font-thin tracking-tighter sm:text-5xl font-outfit drop-shadow-sm">
          Fast<span className="text-purple-500">Report</span>
        </motion.div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-xl font-thin tracking-tighter sm:text-3xl"
          text="Laudos rápidos, sem complicação"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0 },
            visible: { filter: "blur(0px)", opacity: 1 },
          }}
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg font-sans">
          Entre na lista e seja um dos 100 apoiadores da solução para laudar mais rápido, sem precisar ficar trocando de aba.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
