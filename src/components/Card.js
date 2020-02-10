import React from 'react';

const Card = ({ name, email, id, lat, lng, childrenMax, adultMax }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img
        alt="robots"
        src={`https://source.unsplash.com/200x200/?building?${id}`}
        // src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg?options[mood][]=happy`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <div>
        <p>ChildrenMax: {childrenMax} || </p>
        <p>AdultMax: {adultMax}</p>
      </div>
      <a
        class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
        href=""
        title={`lat: ${lat}, lng: ${lng}`}
      >
        <svg
          class="dib h2 w2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="1.414"
        >
          <path
            d="M15.988 5.443c-.004-.02-.007-.04-.012-.058l-.01-.033c-.006-.017-.012-.034-.02-.05-.003-.012-.01-.023-.014-.034l-.023-.045-.02-.032-.03-.04-.024-.03c-.01-.013-.022-.026-.034-.038l-.027-.027-.04-.032-.03-.024-.012-.01L8.38.117c-.23-.155-.53-.155-.76 0L.305 4.99.296 5c-.012.007-.022.015-.032.023-.014.01-.027.02-.04.032l-.027.027-.034.037-.024.03-.03.04c-.006.012-.013.022-.02.033l-.023.045-.015.034c-.007.016-.012.033-.018.05l-.01.032c-.005.02-.01.038-.012.058l-.006.03C.002 5.5 0 5.53 0 5.56v4.875c0 .03.002.06.006.09l.007.03c.003.02.006.04.013.058l.01.033c.006.018.01.035.018.05l.015.033c.006.016.014.03.023.047l.02.03c.008.016.018.03.03.042.007.01.014.02.023.03.01.012.02.025.034.036.01.01.018.02.028.026l.04.033.03.023.01.01 7.31 4.876c.116.078.248.117.382.116.134 0 .266-.04.38-.116l7.314-4.875.01-.01c.012-.007.022-.015.032-.023.014-.01.027-.02.04-.032l.027-.027.034-.037.024-.03.03-.04.02-.032.023-.046.015-.033.018-.052.01-.033c.005-.02.01-.038.013-.058 0-.01.003-.02.004-.03.004-.03.006-.06.006-.09V5.564c0-.03-.002-.06-.006-.09l-.007-.03zM8 9.626L5.568 8 8 6.374 10.432 8 8 9.626zM7.312 5.18l-2.98 1.993-2.406-1.61 5.386-3.59v3.206zM3.095 8l-1.72 1.15v-2.3L3.095 8zm1.237.828l2.98 1.993v3.208l-5.386-3.59 2.406-1.61zm4.355 1.993l2.98-1.993 2.407 1.61-5.387 3.59v-3.206zM12.905 8l1.72-1.15v2.3L12.905 8zm-1.237-.827L8.688 5.18V1.97l5.386 3.59-2.406 1.61z"
            fill-rule="nonzero"
          />
        </svg>
        <span class="f6 ml3 pr2">
          ({lat}, {lng})
        </span>
      </a>
    </div>
  );
};

export default Card;
