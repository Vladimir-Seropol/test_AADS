interface PaymentModelProps {
  model: string;
}

export const PaymentModel = ({ model }: PaymentModelProps) => (
  <span className="text-sm text-gray-500">
    CPD: <span className="text-primary">{model}</span>
  </span>
);