import React from 'react';
import Icon from '../Icons';
import style from './social.module.scss';






const SocialList =[
{
    name: 'facebook',
    url: 'https://www.facebook.com/GSN-co-100228551567383'
},
{
    name: 'twitter',
    url: 'https://www.facebook.com/GSN-co-100228551567383'
},
{
    name: 'instagram',
    url: 'https://www.facebook.com/GSN-co-100228551567383'
},
{
    name: 'youtube',
    url: 'https://www.facebook.com/GSN-co-100228551567383'
},
{
    name: 'linkedin',
    url: 'https://www.facebook.com/GSN-co-100228551567383'
}
]



const Social : React.FC = () => {
    return(
        <div className={style.social} role="list">

{SocialList.map((item,index) => <a className={style.social_item} key={index} href={item.url} target="_blank" rel="noreferrer">
    <Icon name={item.name} />
</a>)}
        </div>
    )
}
export default Social