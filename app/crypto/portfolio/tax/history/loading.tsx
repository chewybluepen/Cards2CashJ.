// app/crypto/portfolio/tax/history/loading.tsx
'use client';

import { motion } from 'framer-motion';
import { FileText, Loader2 } from 'lucide-react';

export default function TaxHistoryLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6 max-w-md w-full"
      >
        <div className="relative">
          <FileText className="w-14 h-14 text-purple-500" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-2 -right-2"
          >
            <Loader2 className="w-6 h-6 text-yellow-500" />
          </motion.div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Loading Tax History
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Compiling your cryptocurrency tax records...
          </p>
        </div>

        <div className="w-full max-w-xs space-y-2">
          <motion.div
            animate={{ width: ['20%', '80%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 bg-purple-500 rounded-full"
          />
          <motion.div
            animate={{ width: ['10%', '90%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="h-1.5 bg-yellow-500 rounded-full opacity-50"
          />
        </div>
      </motion.div>
    </div>
  );
}
