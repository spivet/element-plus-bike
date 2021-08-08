import { ref } from 'vue';

export default function useTable() {
  const defaultHeaderRowStyle = ref({
    borderRadius: '4px 4px 0px 0px',
    backgroundColor: '#F6F8FA',
    padding: '0',
    height: '36px',
    lineHeight: '36px',
  });
  const defaultHeaderCellStyle = ref({
    backgroundColor: '#F6F8FA',
    color: '#323233',
    fontSize: '14px',
    padding: '0',
    height: '36px',
  });
  const defaultCellStyle = ref({
    color: '#323233',
    fontSize: '14px',
    lineHeight: '20px',
  });
  return {
    defaultHeaderRowStyle,
    defaultHeaderCellStyle,
    defaultCellStyle,
  };
}
