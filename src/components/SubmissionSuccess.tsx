
import { FC } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface SubmissionSuccessProps {
  title: string;
  message: string;
  returnPath?: string;
  returnText?: string;
}

const SubmissionSuccess: FC<SubmissionSuccessProps> = ({
  title,
  message,
  returnPath = '/',
  returnText = 'Return Home'
}) => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-10 px-4">
      <div className="success-checkmark">
        <Check size={30} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">{message}</p>
      <Button 
        onClick={() => navigate(returnPath)}
        className="gradient-button"
      >
        {returnText}
      </Button>
    </div>
  );
};

export default SubmissionSuccess;
