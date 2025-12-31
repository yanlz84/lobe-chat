import { ActionIcon, DropdownMenuV2, type MenuProps } from '@lobehub/ui';
import { MoreHorizontalIcon } from 'lucide-react';
import { memo } from 'react';

interface ActionsProps {
  dropdownMenu: MenuProps['items'];
}

const Actions = memo<ActionsProps>(({ dropdownMenu }) => {
  if (!dropdownMenu || dropdownMenu.length === 0) return null;

  return (
    <DropdownMenuV2 items={dropdownMenu}>
      <ActionIcon icon={MoreHorizontalIcon} size={'small'} />
    </DropdownMenuV2>
  );
});

export default Actions;
