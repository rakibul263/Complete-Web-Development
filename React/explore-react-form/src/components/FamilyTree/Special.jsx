import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContext);
    console.log(newAsset);
    return (
        <div>
            <h3>Special : {name}</h3>
            <p>{asset}</p>
            <p>{newAsset}</p>
        </div>
    );
};

export default Special;