import { ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const isValidCircuitPath = 
      pathSegments.length >= 2 && 
      pathSegments[0] === 'circuits' && 
      pathSegments[1].length > 0;

    setShowButton(isValidCircuitPath);
  }, [location]);

  const handleBack = useCallback(() => {
    setShowButton(false);
    navigate(-1);
  }, [navigate]);

  if (!showButton) {
    return null;
  }

  return (
    <button
      onClick={handleBack}
      className="fixed top-20 left-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
      aria-label="Go back"
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
  );
};

export default BackButton;