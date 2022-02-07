import { shallowMount } from '@vue/test-utils';
import MemberRow from '../MemberRow.vue';

describe('MemberRow.vue', () => {
  test('Render Member Details', () => {
    const wrapper = shallowMount(MemberRow, {
      propsData: {
        memberEmail: 'example@mail.com',
        memberName: 'Example',
        memberRole: 'Admin',
        memberId: 1,
      },
    });
    expect(wrapper.text()).toContain('example@mail.com');
    expect(wrapper.text()).toContain('Example');
    expect(wrapper.text()).toContain('Admin');
  });
});
