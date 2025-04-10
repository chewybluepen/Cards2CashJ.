// app/crypto/portfolio/tax/support/loading.tsx
'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Loader2 } from 'lucide-react';

export default function TaxSupportLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6 max-w-sm w-full"
      >
        <div className="relative">
          <HelpCircle className="w-14 h-14 text-blue-500" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-2 -right-2"
          >
            <Loader2 className="w-6 h-6 text-purple-500" />
          </motion.div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Loading Tax Support
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fetching tax assistance resources for you...
          </p>
        </div>

        <motion.div
          animate={{
            width: ['10%', '90%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-2 w-full max-w-xs rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </motion.div>
    </div>
  );
}
