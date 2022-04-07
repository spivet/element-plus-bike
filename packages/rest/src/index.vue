<script>
import { ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus';
import { h } from 'vue';

export default {
  name: 'PlRest',
  props: {
    limit: {
      type: [Number, String],
      default: 3
    },
  },
  setup(props, {slots}) {
    const button = slots.default();
    const buttonIsTrue = button.filter(item => item.children !== 'v-if');
    const buttonCanShow = buttonIsTrue.slice(0, props.limit);
    const buttonCollapse = buttonIsTrue.slice(props.limit);

    const renderDropdownItem = () => {
      return buttonCollapse.map(item => {
        return h(ElDropdownItem, null, () => item);
      });
    };
    const renderDropdownDefault = () => h(ElButton, {
      class: 'pl-dropdown-link',
      type: 'text'
    }, () => '···');
    const renderDropdownMenu = () => h(ElDropdownMenu, null, renderDropdownItem);
    const renderDropdown = h(ElDropdown, {
      class: 'pl-dropdown'
    }, {
      default: renderDropdownDefault,
      dropdown: renderDropdownMenu,
    });

    return () => h(
      'div',
      { class: 'pl-rest' },
      [
        buttonCanShow,
        buttonCollapse.length !== 0 ? renderDropdown : null
      ]
    );
  }
};
</script>

<style>
.pl-rest .pl-dropdown {
  margin-left: 10px;
}
.pl-rest .pl-dropdown-link {
  padding: 0;
  min-height: auto;
}
</style>
