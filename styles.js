// Inject all CSS styles via JavaScript
(function() {
    const styles = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 100px;
        }

        .login-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .login-box {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
        }

        .login-box h1 {
            color: #667eea;
            font-size: 32px;
            text-align: center;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .signup-title {
            color: #666;
            font-size: 18px;
            text-align: center;
            margin-bottom: 25px;
            font-weight: 500;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
            font-size: 14px;
        }

        .form-group input[type="text"],
        .form-group input[type="password"],
        .form-group input[type="email"] {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            transition: border-color 0.3s ease;
        }

        .form-group input[type="text"]:focus,
        .form-group input[type="password"]:focus,
        .form-group input[type="email"]:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
        }

        .form-group input[type="checkbox"] {
            margin-right: 8px;
            cursor: pointer;
        }

        .remember-label {
            display: inline;
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 0;
        }

        .login-btn {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 10px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .login-btn:active {
            transform: translateY(0);
        }

        .signup-link {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 14px;
        }

        .signup-link a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .signup-link a:hover {
            color: #764ba2;
        }

        .account-content {
            text-align: center;
        }

        .account-content p {
            color: #333;
            font-size: 16px;
            margin-bottom: 20px;
        }

        .account-info {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            text-align: left;
        }

        .account-info h3 {
            color: #667eea;
            font-size: 18px;
            margin-bottom: 15px;
            text-align: center;
        }

        .account-info p {
            margin: 10px 0;
            color: #666;
            font-size: 14px;
        }

        img.logo {
            width: auto;
            height: 75px;
        }

        /* Header / Logo */
        .site-header {
            position: fixed;
            top: 16px;
            left: 16px;
            right: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 999;
            pointer-events: auto;
        }

        .site-logo {
            width: 64px;
            height: 64px;
            border-radius: 12px;
            object-fit: cover;
            box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        }

        .site-nav a {
            margin-left: 12px;
            color: white;
            background: rgba(0,0,0,0.12);
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
        }

        .site-nav a:first-child {
            margin-left: 0;
        }

        .site-nav a:hover {
            background: rgba(0,0,0,0.22);
            color: #fff;
        }

        /* Home button style (prominent) */
        .site-nav .home-btn {
            background: #fff;
            color: #667eea;
            padding: 8px 14px;
            border-radius: 10px;
        }

        .site-nav .home-btn:hover {
            background: #f4f6ff;
        }

        /* Main page layout tweaks */
        .main-content {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
            color: white;
        }

        .hero {
            text-align: center;
            margin-bottom: 30px;
        }

        .hero h1 {
            font-size: 40px;
            margin-bottom: 12px;
        }

        .hero p {
            font-size: 18px;
            opacity: 0.95;
        }

        .features {
            display: flex;
            gap: 20px;
            justify-content: center;
        }

        .feature {
            background: rgba(255,255,255,0.06);
            padding: 20px;
            border-radius: 8px;
            width: 260px;
            text-align: center;
        }

        .feature h3 {
            color: #fff;
            margin-bottom: 8px;
        }

        .feature p {
            color: #eee;
            opacity: 0.9;
        }

        /* Additional main page styles */
        .about h2,
        .services h2,
        .contact h2 {
            color: #fff;
            margin-bottom: 8px;
        }

        .about p,
        .services ul,
        .contact p {
            color: #f1f1f1;
        }

        .services ul {
            list-style: disc;
            margin-left: 20px;
        }

        .change_password title {
            text-align: center;
        }
    `;

    // Create a style element and inject it into the head
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
})();
