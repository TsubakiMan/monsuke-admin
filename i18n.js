/* ================================
   もん助 法人管理画面 — i18n 辞書
   ja: 日本語 / en: English / vi: Tiếng Việt
================================ */
const I18N = {
  ja: {
    /* Common */
    app_name: 'もん助',
    corp_admin: '法人管理',
    corp_admin_panel: '法人管理画面',
    facility_admin_panel: '事業所管理画面',
    language: '言語',
    loading: '読み込み中...',

    /* Login */
    login_title: 'ログイン',
    login_subtitle_prefix: '',
    login_subtitle_suffix: 'へのログイン',
    login_email: 'メールアドレス',
    login_password: 'パスワード',
    login_forgot: 'パスワードを忘れた',
    login_remember: 'ログイン状態を保持する',
    login_submit: 'ログイン',
    login_loading: 'ログイン中...',
    login_error: 'メールアドレスまたはパスワードが正しくありません。',
    login_to_facility: '事業所管理画面へ',
    login_facility_divider: '事業所管理はこちら',
    login_email_ph: 'admin@example.com',
    login_password_ph: 'パスワードを入力',
    footer_copyright: '© 2026 もん助 All rights reserved.',

    /* Topbar */
    notifications: '通知',
    help: 'ヘルプ',
    settings: '設定',
    logout: 'ログアウト',

    /* Sidebar nav labels */
    nav_main: 'メイン',
    nav_ops: '運用',
    nav_mgmt: '管理',
    sidebar_foot: 'もん助 管理画面 v1.0',

    /* Pages */
    page_dashboard: 'ダッシュボード',
    page_facilities: '事業所一覧',
    page_company: '法人情報',
    page_workers: 'ワーカー管理',
    page_jobs: '求人管理',
    page_attendance: '勤怠管理',
    page_messages: 'チャット',
    page_reviews: 'レビュー',
    page_billing: '請求・支払い',
    page_registry: '労働者名簿・源泉徴収票',
    page_report: 'レポート・分析',
    page_settings: '設定',

    /* Page subtitles */
    sub_dashboard: '法人全体の利用状況を一目で確認できます。',
    sub_facilities: '事業所用管理画面に移動できます。',
    sub_company: '法人の基本情報を確認・編集できます。',
    sub_workers: 'もん助でマッチングしたことがあるワーカーの一覧です。',
    sub_jobs: '求人の確認・管理ができます。',
    sub_attendance: 'ワーカーの勤怠記録を確認できます。',
    sub_messages: '事業所ごとのチャットを確認できます。',
    sub_reviews: 'ワーカーから事業所に寄せられた評価・レビューを確認できます。',
    sub_billing: '月次の利用料金・利用明細・支払い状況を確認できます。',
    sub_registry: '労働者（ワーカー）の名簿・支払い情報の確認や源泉徴収票のダウンロードができます。',
    sub_report: '利用状況の推移や事業所別比較を確認できます。',
    sub_settings: 'アカウントや通知の設定を変更できます。',

    /* Stat cards */
    stat_usage_month: '今月の利用額',
    stat_shifts_month: '今月の稼働件数',
    stat_unread_chats: '未読チャット',
    stat_matched_workers: 'マッチング済みワーカー数',
    stat_total_matches: '累計マッチング回数',
    stat_avg_rating: '平均評価',
    stat_active_jobs: '公開中の求人',
    stat_applies_month: '応募総数（今月）',
    stat_match_rate: 'マッチング率',
    stat_usage_tax: '今月の利用額（税込）',
    stat_annual_total: '年間累計',
    stat_target_facilities: '対象事業所',
    stat_overall_score: '全体平均スコア',
    stat_new_reviews: '今月の新着レビュー',
    stat_top_facility: '最も高評価の事業所',
    stat_annual_usage: '年間利用総額',
    stat_avg_month: '月平均利用額',
    stat_total_workers: '累計稼働ワーカー',
    stat_total_shifts: '累計稼働回数',
    stat_vs_prev: '前月比',
    stat_check: '確認する →',
    stat_cumulative: '累計',

    /* Buttons */
    btn_search: '検索',
    btn_add: '追加する',
    btn_cancel: 'キャンセル',
    btn_save: '保存する',
    btn_delete: '削除',
    btn_edit: '編集',
    btn_detail: '詳細',
    btn_detail_confirm: '詳細確認',
    btn_download_csv: 'CSVエクスポート',
    btn_new: '新規追加',
    btn_add_admin: '管理者を追加',

    /* Roles */
    role_owner: 'オーナー管理者',
    role_admin: '管理者',
    role_viewer: '閲覧者',

    /* Admin mgmt */
    admin_section: '管理者アカウント',
    admin_section_desc: 'オーナー管理者のみが、管理者の追加・権限の編集ができます。',
    admin_restrict: '管理者アカウントの編集はオーナー管理者のみ可能です。',
    admin_name: '名前',
    admin_email: 'メールアドレス',
    admin_role: '権限',
    admin_status: 'ステータス',
    admin_enabled: '有効',
    admin_you: '(自分)',
    admin_add_title: '管理者を追加',
    admin_edit_title: '権限を編集',
    admin_desc_title: '権限の説明',
    admin_desc_owner: 'オーナー管理者 — 全機能のアクセス・管理者の追加/編集/削除が可能',
    admin_desc_admin: '管理者 — 全機能のアクセスが可能（管理者の管理は不可）',
    admin_desc_viewer: '閲覧者 — データの閲覧のみ（編集・操作は不可）',

    /* Notifications */
    notif_settings_title: '通知設定',
    notif_email: 'メール通知',
    notif_freq: '通知頻度',
    notif_enabled: '有効',
    notif_disabled: '無効',
    notif_instant: '即時',
    notif_daily: '1日1回',
    notif_weekly: '週1回',

    /* Toast */
    toast_admin_added: '管理者を追加しました',
    toast_admin_updated: '権限を更新しました',
    toast_admin_deleted: '管理者を削除しました',
    toast_csv_downloaded: 'CSVをダウンロードしました',
    toast_logout_confirm: 'ログアウトしますか？',

    /* Placeholder */
    ph_search_facility: '事業所名で検索...',
    ph_search_worker: 'ワーカー名で検索...',
  },

  en: {
    app_name: 'Monsuke',
    corp_admin: 'Corporate Admin',
    corp_admin_panel: 'Corporate Admin Panel',
    facility_admin_panel: 'Facility Admin Panel',
    language: 'Language',
    loading: 'Loading...',

    login_title: 'Sign In',
    login_subtitle_prefix: 'Sign in to the ',
    login_subtitle_suffix: '',
    login_email: 'Email Address',
    login_password: 'Password',
    login_forgot: 'Forgot password?',
    login_remember: 'Keep me signed in',
    login_submit: 'Sign In',
    login_loading: 'Signing in...',
    login_error: 'Email or password is incorrect.',
    login_to_facility: 'Go to Facility Admin Panel',
    login_facility_divider: 'Facility admin here',
    login_email_ph: 'admin@example.com',
    login_password_ph: 'Enter your password',
    footer_copyright: '© 2026 Monsuke All rights reserved.',

    notifications: 'Notifications',
    help: 'Help',
    settings: 'Settings',
    logout: 'Log out',

    nav_main: 'MAIN',
    nav_ops: 'OPERATIONS',
    nav_mgmt: 'MANAGEMENT',
    sidebar_foot: 'Monsuke Admin v1.0',

    page_dashboard: 'Dashboard',
    page_facilities: 'Facilities',
    page_company: 'Company Info',
    page_workers: 'Worker Management',
    page_jobs: 'Job Management',
    page_attendance: 'Attendance',
    page_messages: 'Messages',
    page_reviews: 'Reviews',
    page_billing: 'Billing & Payments',
    page_registry: 'Worker Registry & Tax',
    page_report: 'Reports & Analytics',
    page_settings: 'Settings',

    sub_dashboard: 'Get an at-a-glance view of your corporate operations.',
    sub_facilities: 'Navigate to each facility admin panel.',
    sub_company: 'View and edit your company information.',
    sub_workers: 'List of workers matched via Monsuke.',
    sub_jobs: 'Review and manage your job postings.',
    sub_attendance: 'Check worker attendance records.',
    sub_messages: 'View chats by facility.',
    sub_reviews: 'View evaluations and reviews from workers.',
    sub_billing: 'Check monthly usage, statements, and payment status.',
    sub_registry: 'View worker registries, payment info, and download tax withholding slips.',
    sub_report: 'Review usage trends and facility comparisons.',
    sub_settings: 'Configure account and notification settings.',

    stat_usage_month: 'Usage This Month',
    stat_shifts_month: 'Shifts This Month',
    stat_unread_chats: 'Unread Chats',
    stat_matched_workers: 'Matched Workers',
    stat_total_matches: 'Total Matches',
    stat_avg_rating: 'Avg Rating',
    stat_active_jobs: 'Active Jobs',
    stat_applies_month: 'Applications (This Month)',
    stat_match_rate: 'Match Rate',
    stat_usage_tax: 'Usage This Month (Tax Incl.)',
    stat_annual_total: 'Annual Total',
    stat_target_facilities: 'Target Facilities',
    stat_overall_score: 'Overall Score',
    stat_new_reviews: 'New Reviews This Month',
    stat_top_facility: 'Top-Rated Facility',
    stat_annual_usage: 'Annual Usage Total',
    stat_avg_month: 'Monthly Avg Usage',
    stat_total_workers: 'Total Active Workers',
    stat_total_shifts: 'Total Shifts',
    stat_vs_prev: 'vs last month',
    stat_check: 'Check →',
    stat_cumulative: 'Cumulative',

    btn_search: 'Search',
    btn_add: 'Add',
    btn_cancel: 'Cancel',
    btn_save: 'Save',
    btn_delete: 'Delete',
    btn_edit: 'Edit',
    btn_detail: 'Details',
    btn_detail_confirm: 'View Details',
    btn_download_csv: 'Export CSV',
    btn_new: 'New',
    btn_add_admin: 'Add Admin',

    role_owner: 'Owner Admin',
    role_admin: 'Admin',
    role_viewer: 'Viewer',

    admin_section: 'Admin Accounts',
    admin_section_desc: 'Only Owner Admins can add or edit admin accounts.',
    admin_restrict: 'Only Owner Admins can edit admin accounts.',
    admin_name: 'Name',
    admin_email: 'Email',
    admin_role: 'Role',
    admin_status: 'Status',
    admin_enabled: 'Active',
    admin_you: '(You)',
    admin_add_title: 'Add Admin',
    admin_edit_title: 'Edit Role',
    admin_desc_title: 'Role Descriptions',
    admin_desc_owner: 'Owner Admin — Full access + admin management (add/edit/delete)',
    admin_desc_admin: 'Admin — Full access (except admin management)',
    admin_desc_viewer: 'Viewer — Read-only access',

    notif_settings_title: 'Notification Settings',
    notif_email: 'Email Notifications',
    notif_freq: 'Frequency',
    notif_enabled: 'Enabled',
    notif_disabled: 'Disabled',
    notif_instant: 'Instant',
    notif_daily: 'Once a day',
    notif_weekly: 'Weekly',

    toast_admin_added: 'Admin added',
    toast_admin_updated: 'Role updated',
    toast_admin_deleted: 'Admin deleted',
    toast_csv_downloaded: 'CSV downloaded',
    toast_logout_confirm: 'Log out?',

    ph_search_facility: 'Search by facility name...',
    ph_search_worker: 'Search by worker name...',
  },

  vi: {
    app_name: 'Monsuke',
    corp_admin: 'Quản lý doanh nghiệp',
    corp_admin_panel: 'Trang quản lý doanh nghiệp',
    facility_admin_panel: 'Trang quản lý cơ sở',
    language: 'Ngôn ngữ',
    loading: 'Đang tải...',

    login_title: 'Đăng nhập',
    login_subtitle_prefix: 'Đăng nhập vào ',
    login_subtitle_suffix: '',
    login_email: 'Địa chỉ email',
    login_password: 'Mật khẩu',
    login_forgot: 'Quên mật khẩu?',
    login_remember: 'Duy trì đăng nhập',
    login_submit: 'Đăng nhập',
    login_loading: 'Đang đăng nhập...',
    login_error: 'Email hoặc mật khẩu không chính xác.',
    login_to_facility: 'Đến trang quản lý cơ sở',
    login_facility_divider: 'Quản lý cơ sở tại đây',
    login_email_ph: 'admin@example.com',
    login_password_ph: 'Nhập mật khẩu',
    footer_copyright: '© 2026 Monsuke All rights reserved.',

    notifications: 'Thông báo',
    help: 'Trợ giúp',
    settings: 'Cài đặt',
    logout: 'Đăng xuất',

    nav_main: 'CHÍNH',
    nav_ops: 'VẬN HÀNH',
    nav_mgmt: 'QUẢN LÝ',
    sidebar_foot: 'Monsuke Quản trị v1.0',

    page_dashboard: 'Bảng điều khiển',
    page_facilities: 'Danh sách cơ sở',
    page_company: 'Thông tin doanh nghiệp',
    page_workers: 'Quản lý nhân viên',
    page_jobs: 'Quản lý tuyển dụng',
    page_attendance: 'Quản lý chấm công',
    page_messages: 'Trò chuyện',
    page_reviews: 'Đánh giá',
    page_billing: 'Thanh toán & Hóa đơn',
    page_registry: 'Hồ sơ nhân viên & Thuế',
    page_report: 'Báo cáo & Phân tích',
    page_settings: 'Cài đặt',

    sub_dashboard: 'Xem nhanh tình hình sử dụng toàn doanh nghiệp.',
    sub_facilities: 'Chuyển đến trang quản lý của từng cơ sở.',
    sub_company: 'Xem và chỉnh sửa thông tin cơ bản của doanh nghiệp.',
    sub_workers: 'Danh sách nhân viên đã được kết nối qua Monsuke.',
    sub_jobs: 'Xem và quản lý các tin tuyển dụng.',
    sub_attendance: 'Kiểm tra bản ghi chấm công của nhân viên.',
    sub_messages: 'Xem tin nhắn theo từng cơ sở.',
    sub_reviews: 'Xem đánh giá và phản hồi từ nhân viên.',
    sub_billing: 'Xem phí sử dụng hàng tháng, chi tiết và trạng thái thanh toán.',
    sub_registry: 'Xem hồ sơ nhân viên, thông tin thanh toán và tải phiếu khấu trừ thuế.',
    sub_report: 'Xem xu hướng sử dụng và so sánh giữa các cơ sở.',
    sub_settings: 'Thay đổi cài đặt tài khoản và thông báo.',

    stat_usage_month: 'Sử dụng tháng này',
    stat_shifts_month: 'Số ca tháng này',
    stat_unread_chats: 'Tin nhắn chưa đọc',
    stat_matched_workers: 'Nhân viên đã kết nối',
    stat_total_matches: 'Tổng số lượt kết nối',
    stat_avg_rating: 'Đánh giá trung bình',
    stat_active_jobs: 'Tin tuyển dụng đang mở',
    stat_applies_month: 'Đơn ứng tuyển (tháng này)',
    stat_match_rate: 'Tỷ lệ kết nối',
    stat_usage_tax: 'Sử dụng tháng này (đã bao gồm thuế)',
    stat_annual_total: 'Tổng năm',
    stat_target_facilities: 'Cơ sở mục tiêu',
    stat_overall_score: 'Điểm tổng thể',
    stat_new_reviews: 'Đánh giá mới tháng này',
    stat_top_facility: 'Cơ sở được đánh giá cao nhất',
    stat_annual_usage: 'Tổng sử dụng hàng năm',
    stat_avg_month: 'Trung bình tháng',
    stat_total_workers: 'Tổng nhân viên đã làm việc',
    stat_total_shifts: 'Tổng số ca',
    stat_vs_prev: 'so với tháng trước',
    stat_check: 'Xem chi tiết →',
    stat_cumulative: 'Tích lũy',

    btn_search: 'Tìm kiếm',
    btn_add: 'Thêm',
    btn_cancel: 'Hủy',
    btn_save: 'Lưu',
    btn_delete: 'Xóa',
    btn_edit: 'Chỉnh sửa',
    btn_detail: 'Chi tiết',
    btn_detail_confirm: 'Xem chi tiết',
    btn_download_csv: 'Xuất CSV',
    btn_new: 'Thêm mới',
    btn_add_admin: 'Thêm quản trị viên',

    role_owner: 'Quản trị viên chủ',
    role_admin: 'Quản trị viên',
    role_viewer: 'Người xem',

    admin_section: 'Tài khoản quản trị',
    admin_section_desc: 'Chỉ Quản trị viên chủ mới có thể thêm hoặc chỉnh sửa quản trị viên.',
    admin_restrict: 'Chỉ Quản trị viên chủ mới có thể chỉnh sửa tài khoản quản trị.',
    admin_name: 'Họ tên',
    admin_email: 'Email',
    admin_role: 'Quyền',
    admin_status: 'Trạng thái',
    admin_enabled: 'Đang hoạt động',
    admin_you: '(Bạn)',
    admin_add_title: 'Thêm quản trị viên',
    admin_edit_title: 'Chỉnh sửa quyền',
    admin_desc_title: 'Mô tả quyền',
    admin_desc_owner: 'Quản trị viên chủ — Toàn quyền + quản lý tài khoản quản trị (thêm/sửa/xóa)',
    admin_desc_admin: 'Quản trị viên — Toàn quyền (trừ quản lý tài khoản quản trị)',
    admin_desc_viewer: 'Người xem — Chỉ được xem, không chỉnh sửa',

    notif_settings_title: 'Cài đặt thông báo',
    notif_email: 'Thông báo email',
    notif_freq: 'Tần suất',
    notif_enabled: 'Bật',
    notif_disabled: 'Tắt',
    notif_instant: 'Ngay lập tức',
    notif_daily: 'Mỗi ngày một lần',
    notif_weekly: 'Hàng tuần',

    toast_admin_added: 'Đã thêm quản trị viên',
    toast_admin_updated: 'Đã cập nhật quyền',
    toast_admin_deleted: 'Đã xóa quản trị viên',
    toast_csv_downloaded: 'Đã tải xuống CSV',
    toast_logout_confirm: 'Đăng xuất?',

    ph_search_facility: 'Tìm theo tên cơ sở...',
    ph_search_worker: 'Tìm theo tên nhân viên...',
  }
};

/* 現在の言語 */
function getLang(){
  return localStorage.getItem('monsuke_lang') || 'ja';
}
function setLang(lang){
  localStorage.setItem('monsuke_lang',lang);
  applyI18n();
  if(typeof onLangChange==='function') onLangChange(lang);
}
function t(key){
  const lang=getLang();
  return (I18N[lang]&&I18N[lang][key]) || (I18N.ja[key]) || key;
}

/* data-i18n属性を持つ全要素に翻訳を適用 */
function applyI18n(){
  const lang=getLang();
  /* HTMLタグの言語属性更新 */
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    const val=t(key);
    el.textContent=val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key=el.getAttribute('data-i18n-ph');
    el.setAttribute('placeholder',t(key));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.getAttribute('data-i18n-html');
    el.innerHTML=t(key);
  });
  /* ロール名を反映（ロール別バッジ・ドロップダウン） */
  const roleEl=document.getElementById('topbar-role');
  if(roleEl){
    const r=roleEl.getAttribute('data-role')||roleEl.textContent;
    const map={'オーナー管理者':'role_owner','管理者':'role_admin','閲覧者':'role_viewer','Owner Admin':'role_owner','Admin':'role_admin','Viewer':'role_viewer'};
    const key=map[r]||'role_admin';
    roleEl.textContent=t(key);
  }

  /* 現在の言語ボタンをハイライト */
  document.querySelectorAll('.lang-opt').forEach(el=>{
    el.classList.toggle('on', el.getAttribute('data-lang')===lang);
  });
  const current=document.getElementById('current-lang');
  if(current){
    current.textContent={ja:'日本語',en:'English',vi:'Tiếng Việt'}[lang];
  }
}
