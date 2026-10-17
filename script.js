:root {
    --bg-color: #0b0f19;
    --card-bg: #151d30;
    --text-color: #f3f4f6;
    --accent-color: #3b82f6;
    --sub-text: #9ca3af;
    --border-color: #24324f;
    --shadow: rgba(0, 0, 0, 0.5);
}

body.light-theme {
    --bg-color: #f3f4f6;
    --card-bg: #ffffff;
    --text-color: #1f2937;
    --accent-color: #2563eb;
    --sub-text: #4b5563;
    --border-color: #e5e7eb;
    --shadow: rgba(0, 0, 0, 0.1);
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    margin: 0;
    padding: 20px 10px;
    transition: background 0.3s, color 0.3s;
}

.container {
    max-width: 480px;
    margin: 0 auto;
}

header { margin-bottom: 25px; }
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: var(--sub-text);
}
.theme-btn {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
}
.main-title { font-size: 28px; text-align: center; margin: 20px 0 10px 0; color: var(--text-color); }

.features { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 20px; }
.feature-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    flex: 1;
    text-align: center;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 4px 6px var(--shadow);
}
.feat-bold { display: block; font-weight: bold; font-size: 18px; color: #10b981; }
.feat-text { font-size: 12px; color: var(--sub-text); }

.vip-banner {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    border: 2px solid #f59e0b;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 25px;
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
}
.vip-header { display: flex; justify-content: space-between; align-items: center; }
.vip-header h2 { margin: 0; font-size: 22px; color: #f59e0b; }
.vip-price { font-weight: bold; font-size: 16px; color: #f59e0b; }
.vip-badge { margin: 5px 0 15px 0; font-size: 12px; color: #10b981; text-transform: uppercase; font-weight: bold;}

.service-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 15px;
    box-shadow: 0 4px 6px var(--shadow);
}
.service-card h3 { margin: 0 0 10px 0; font-size: 18px; color: var(--accent-color); }
.prices-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 14px; margin-bottom: 10px; color: var(--sub-text); }
.price-range { font-size: 18px; font-weight: bold; color: #10b981; margin: 5px 0; }
.service-desc-text { margin: 8px 0 0 0; font-size: 13px; color: var(--sub-text); line-height: 1.4; font-style: italic; }

.other-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
.mini-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 12px;
    border-radius: 10px;
    text-align: center;
}
.mini-card h4 { margin: 0 0 5px 0; font-size: 14px; }
.mini-price { font-size: 14px; font-weight: bold; color: #10b981; }

.payment-cta { text-align: center; margin-top: 30px; }
.payment-info { font-size: 14px; color: var(--sub-text); margin-bottom: 20px; }
.cta-buttons { display: flex; flex-direction: column; gap: 12px; }
.btn {
    padding: 14px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    border: none;
    transition: transform 0.1s;
}
.btn:active { transform: scale(0.98); }
.primary-btn { background: #0088cc; color: white; }
.secondary-btn { background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color); }

.modal {
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.7); justify-content: center; align-items: center; z-index: 1000; padding: 10px; box-sizing: border-box;
}
.modal-content {
    background: var(--card-bg); color: var(--text-color); padding: 25px; border-radius: 16px;
    max-width: 440px; width: 100%; position: relative; max-height: 80vh; overflow-y: auto;
}
.close-btn { position: absolute; top: 15px; right: 20px; font-size: 28px; cursor: pointer; color: var(--sub-text); }
.reviews-list { margin-top: 20px; }
.review-item { border-bottom: 1px solid var(--border-color); padding: 15px 0; }
.review-item p { margin: 0 0 5px 0; font-style: italic; font-size: 14px; }
.review-author { font-size: 12px; color: #3b82f6; }