// ต้องโหลดก่อน <style> เสมอ กัน flash ของธีมผิด — ค่าเริ่มต้น = โหมดมืด
document.documentElement.dataset.theme = localStorage.getItem('mishos-theme') || 'dark';
