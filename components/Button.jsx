import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React from "react";

const Spinner = () => (
	<motion.div
		animate={{
			rotate: [0, 360],
			transition: { repeat: Infinity },
		}}
		exit={{ opacity: 0 }}
	>
		<motion.svg
			initial={{ height: 0, width: 0, opacity: 0 }}
			animate={{ height: 12, width: 12, opacity: 1, transition: { bounce: 0 } }}
			exit={{ height: 0, width: 0, opacity: 0 }}
			class="text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</motion.svg>
	</motion.div>
);

const CheckMark = () => (
	<motion.svg
		initial={{ opacity: 0, scale: 0 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0, scale: 0 }}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="16"
		height="16"
	>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
		/>
	</motion.svg>
);

export default function Button({ label, onClick, loading = false }) {
	return (
		<motion.button
			whileTap={{ scale: 0.98 }}
			className="bg-[#2F3941] focus:outline-none flex py-2 px-3 text-white text-xs rounded-sm items-center"
			onClick={onClick}
		>
			<AnimatePresence>
				{loading && (
					<motion.div
						initial={{
							marginRight: 0,
						}}
						animate={{ marginRight: 8 }}
						exit={{ marginRight: 0 }}
					>
						<Spinner />
					</motion.div>
				)}
			</AnimatePresence>

			<span>{label}</span>
		</motion.button>
	);
}
