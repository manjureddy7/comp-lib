import React from 'react';
interface NameProps {
    name: string;
    company: string;
    experience?: string;
}
declare const Name: React.FC<NameProps>;
export default Name;
