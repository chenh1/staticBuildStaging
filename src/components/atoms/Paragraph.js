import React from 'react';

const Paragraph = ({text}) => {
    return (
        <p className="paragraph-one">
            {text.map((textItem, index) => 
                textItem.embeddedLink ? 
                    <a key={"embeddedLink" + index}
                        href={textItem.embeddedLink} 
                        data-link-type="externalLink" 
                        className="article-link page-link">
                        {textItem.text}
                    </a>
                    :
                    textItem
            )}
        </p>
    );
};

export default Paragraph;