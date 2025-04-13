interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  // Delete background white - need to manually change colors for cards
  const Card = ({ children, className = "" }: CardProps) => {
    return (
      <div className={`border border-gray-300 shadow-sm rounded-lg p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;