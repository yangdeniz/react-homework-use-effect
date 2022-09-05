import './progress-bar.css';

function ProgressBar() {
  return (
    <div className='progress-bar-wrapper'>
      <div className='progress-bar'>
        <div className='progress-bar-value'></div>
      </div>
    </div>
  );
}

export default ProgressBar;