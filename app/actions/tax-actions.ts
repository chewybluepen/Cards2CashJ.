// /app/actions/tax-actions.ts

export interface TaxFormData {
  /** Total declared income */
  income: number
  /** Total deductions (e.g., expenses, allowances) */
  deductions: number
  /** Capital gains or losses from crypto activities */
  cryptoGains: number
}

export interface TaxCalculationResult {
  /** Calculated taxable income */
  taxableIncome: number
  /** Calculated tax due based on a flat tax rate */
  taxDue: number
}

/**
 * Calculates tax based on the provided form data.
 *
 * The logic used here is a simple demonstration:
 * - Taxable income is calculated by adding income and crypto gains, then subtracting deductions.
 * - A flat tax rate of 20% is applied to calculate the tax due.
 *
 * @param data - The tax form data with income, deductions, and crypto gains.
 * @returns The calculated taxable income and tax due.
 */
export const calculateTax = (data: TaxFormData): TaxCalculationResult => {
  const { income, deductions, cryptoGains } = data
  const taxableIncome = Math.max(income + cryptoGains - deductions, 0)  // Ensure taxableIncome isn’t negative
  const taxDue = taxableIncome * 0.2  // Example flat rate of 20%
  return { taxableIncome, taxDue }
}

/**
 * Simulates submitting a tax return to a backend API.
 *
 * This is an asynchronous function that, in a real-world scenario, would perform an API call.
 * Here it simply simulates a delay then returns a success response including the computed tax values.
 *
 * @param data - The tax form data to submit.
 * @returns A promise resolving to an object indicating success and a message.
 */
export const submitTaxReturn = async (
  data: TaxFormData
): Promise<{ success: boolean; message: string }> => {
  // Calculate tax based on the form data.
  const taxCalculation = calculateTax(data)

  // Simulate a delay representing an API call (e.g., 1 second)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would perform a fetch/axios request here to submit the tax data.
  // For example:
  // const response = await fetch("/api/submit-tax", { method: "POST", body: JSON.stringify(data) })
  // const result = await response.json()
  // return result

  // For now, return a simulated success result.
  return {
    success: true,
    message: `Tax return submitted successfully. Taxable Income: ${taxCalculation.taxableIncome.toFixed(
      2
    )}, Tax Due: ${taxCalculation.taxDue.toFixed(2)}.`
  }
}

/**
 * Uploads tax transactions by submitting the tax return.
 *
 * This function serves as an alias to submitTaxReturn, providing the expected export.
 *
 * @param data - The tax form data to upload.
 * @returns A promise resolving to the result of the upload.
 */
export const uploadTaxTransactions = async (
  data: TaxFormData
): Promise<{ success: boolean; message: string }> => {
  // In this implementation, uploadTaxTransactions wraps submitTaxReturn.
  // Adjust the behavior as needed.
  return submitTaxReturn(data)
}
