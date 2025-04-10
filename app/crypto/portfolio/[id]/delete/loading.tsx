// app/crypto/portfolio/[id]/delete/loading.tsx
'use client';

import { motion } from 'framer-motion';
import { Loader2, Trash2 } from 'lucide-react';

export default function DeleteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4"
      >
        <div className="relative">
          <Trash2 className="w-12 h-12 text-red-500" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-2 -right-2"
          >
            <Loader2 className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Deleting Portfolio
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Please wait while we process your request...
          </p>
        </div>

        <motion.div
          animate={{ width: ['0%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-1 bg-blue-500 rounded-full w-full max-w-xs"
        />
      </motion.div>
    </div>
  );
}
