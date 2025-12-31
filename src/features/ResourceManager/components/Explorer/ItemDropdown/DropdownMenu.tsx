import { ActionIcon, DropdownMenuV2 } from '@lobehub/ui';
import { createStaticStyles, css, cx } from 'antd-style';
import { type ItemType } from 'antd/es/menu/interface';
import { MoreHorizontalIcon } from 'lucide-react';
import { memo } from 'react';

interface DropdownMenuProps {
  className?: string;
  items: ItemType[] | (() => ItemType[]);
}

const styles = createStaticStyles(({ cssVar }) => ({
  container: css`
    &:has([data-popup-open]) {
      background-color: ${cssVar.colorFillTertiary};
    }
  `,
}));

const DropdownMenu = memo<DropdownMenuProps>(({ items, className }) => {
  return (
    <DropdownMenuV2 items={items} triggerProps={{ className: cx(styles.container) }}>
      <ActionIcon className={className} icon={MoreHorizontalIcon} size={'small'} />
    </DropdownMenuV2>
  );
});

export default DropdownMenu;
