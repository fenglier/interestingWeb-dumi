import type { MusicInfo } from '../types';

interface HeaderProps {
  /** 音乐信息 */
  musicInfo: MusicInfo;
  /** 返回按钮回调 */
  onBack?: () => void;
  /** 更多选项回调 */
  onMore?: () => void;
}

/**
 * Header 组件
 * 顶部标题栏，包含返回按钮、标题和更多菜单
 */
export const Header = ({ musicInfo }: HeaderProps) => {
  return (
    <div className="music-player-header">
      {/* 返回按钮 */}
      {/* <Widget id="back" onClick={onBack}>
        <button type="button" className="header-btn back-btn">
          <BackIcon />
        </button>
      </Widget> */}

      {/* 标题信息 */}
      <div className="header-info">
        <h1 className="header-title">{musicInfo.title}</h1>
        {musicInfo.subtitle && (
          <h2 className="header-subtitle">{musicInfo.subtitle}</h2>
        )}
        {musicInfo.description && (
          <p className="header-description">{musicInfo.description}</p>
        )}
      </div>

      {/* 更多菜单按钮 */}
      {/* <Widget id="more" onClick={onMore}>
        <button type="button" className="header-btn more-btn">
          <MoreIcon />
        </button>
      </Widget> */}
    </div>
  );
};
