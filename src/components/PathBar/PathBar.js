import React from 'react';
import './PathBar.css';
const PathBar = () => {
    // Component logic and state go here
    const paths = ['Flashcard', 'Mathematics', 'Relations and Functions'];
    return (
        // JSX markup for the component goes here
        <div className='PathBar'>
            <svg id='home' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5738 11.7175L15.8238 4.06123C15.5958 3.86151 15.3031 3.7514 15 3.7514C14.6969 3.7514 14.4042 3.86151 14.1763 4.06123L5.42625 11.7175C5.29221 11.8349 5.18483 11.9797 5.11132 12.142C5.0378 12.3043 4.99985 12.4805 5 12.6587V23.7487C5 24.0802 5.1317 24.3982 5.36612 24.6326C5.60054 24.867 5.91848 24.9987 6.25 24.9987H11.25C11.5815 24.9987 11.8995 24.867 12.1339 24.6326C12.3683 24.3982 12.5 24.0802 12.5 23.7487V18.7487C12.5 18.4172 12.6317 18.0993 12.8661 17.8648C13.1005 17.6304 13.4185 17.4987 13.75 17.4987H16.25C16.5815 17.4987 16.8995 17.6304 17.1339 17.8648C17.3683 18.0993 17.5 18.4172 17.5 18.7487V23.7487C17.5 24.0802 17.6317 24.3982 17.8661 24.6326C18.1005 24.867 18.4185 24.9987 18.75 24.9987H23.75C24.0815 24.9987 24.3995 24.867 24.6339 24.6326C24.8683 24.3982 25 24.0802 25 23.7487V12.6587C25.0002 12.4805 24.9622 12.3043 24.8887 12.142C24.8152 11.9797 24.7078 11.8349 24.5738 11.7175Z" stroke="#696671" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div class='svg-box'><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.589996 10.59L5.17 6L0.589996 1.41L2 0L8 6L2 12L0.589996 10.59Z" fill="#06286E"/>
</svg></div>

            {paths.map((path, index) => (
                <div key={index} className={index === paths.length - 1 ? 'last-path' : 'path' } >
                    <div className='pathName'>{path}</div>
                    {index !== paths.length - 1 && <div class='svg-box'><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.589996 10.59L5.17 6L0.589996 1.41L2 0L8 6L2 12L0.589996 10.59Z" fill="#06286E"/>
</svg></div> }
                </div>
            ))}
        </div>
    );
};

export default PathBar;