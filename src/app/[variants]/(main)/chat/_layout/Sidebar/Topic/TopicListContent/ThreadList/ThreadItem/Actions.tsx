import { ActionIcon, DropdownMenuV2, type MenuProps } from '@lobehub/ui';
import { MoreHorizontalIcon } from 'lucide-react';
import { memo } from 'react';

interface ActionProps {
  dropdownMenu: MenuProps['items'];
}

const Actions = memo<ActionProps>(({ dropdownMenu }) => {
  return (
    <DropdownMenuV2 items={dropdownMenu}>
      <ActionIcon icon={MoreHorizontalIcon} size={'small'} />
    </DropdownMenuV2>
  );
});

export default Actions;
