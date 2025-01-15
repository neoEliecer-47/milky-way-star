

const AccordionArrow = ({ className, stroke }:{ className?: string, stroke: number }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke="currentColor"
        className={className}
        style={{ borderRadius: '5px', backgroundColor: 'rgba(242, 246, 237, 0.3)' }}
        
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  };
  
  export default AccordionArrow;