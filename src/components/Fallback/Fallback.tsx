import BigPortal from '@/assets/images/big_portal.png';
import SmallPortal from '@/assets/images/small_portal.png';
import styles from './Fallback.module.css';

type Props = {
  variant?: 'large' | 'small';
  label?: string;
};

export const Fallback = ({ label, variant = 'large' }: Props) => {
  const isLarge = variant === 'large';
  return (
    <div className={styles.fallback}>
      {label && isLarge && <span>{label}</span>}
      <img src={isLarge ? BigPortal : SmallPortal} alt="fallback" />
    </div>
  );
};
