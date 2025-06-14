
export const checkWebGLSupport = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      return false;
    }

    // Clean up
    const loseContext = gl.getExtension('WEBGL_lose_context');
    if (loseContext) {
      loseContext.loseContext();
    }
    
    return true;
  } catch (e) {
    console.warn('WebGL support check failed:', e);
    return false;
  }
};

export const getWebGLErrorMessage = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mobile') || userAgent.includes('android') || userAgent.includes('iphone')) {
    return 'Your mobile device may not support advanced 3D graphics. Try using a desktop browser for the full experience.';
  }
  
  return 'Your browser or device does not support WebGL, which is required for 3D visualizations. Please update your browser or try a different one.';
};
